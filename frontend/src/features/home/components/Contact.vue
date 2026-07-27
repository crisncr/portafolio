<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

declare global {
  interface Window {
    turnstile: any;
  }
}

const formData = reactive({ nombre: "", email: "", mensaje: "", website: "" });
const isSubmitting = ref(false);
const submitStatus = ref<{ type: "success" | "error"; message: string } | null>(null);

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  isSubmitting.value = true;
  submitStatus.value = null;

  // 1. Honeypot Anti-Spam: Si el bot llenó el campo oculto, bloqueamos silenciosamente
  if (formData.website !== "") {
    isSubmitting.value = false;
    submitStatus.value = { type: "success", message: "Mensaje enviado exitosamente. ¡Gracias!" };
    return;
  }

  // 2. Rate Limiting: Evitar múltiples envíos rápidos
  const lastSubmit = localStorage.getItem("lastContactSubmit");
  if (lastSubmit) {
    const timePassed = Date.now() - parseInt(lastSubmit);
    if (timePassed < 60000) { // 60 segundos
      isSubmitting.value = false;
      submitStatus.value = { type: "error", message: "Por favor, espera un minuto antes de enviar otro mensaje." };
      return;
    }
  }

  // 3. Obtener el token de Cloudflare Turnstile
  const formElement = e.target as HTMLFormElement;
  const formObj = new FormData(formElement);
  const turnstileResponse = formObj.get("cf-turnstile-response");

  if (!turnstileResponse) {
    isSubmitting.value = false;
    submitStatus.value = { type: "error", message: "Por favor, completa el desafío de seguridad (Captcha)." };
    return;
  }

  try {
    const RAW_API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    const API_URL = RAW_API_URL.endsWith('/') ? RAW_API_URL.slice(0, -1) : RAW_API_URL;
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        mensaje: formData.mensaje,
        cf_turnstile_response: turnstileResponse
      }), // Enviamos el token al backend
    });
    
    // Si la respuesta es exitosa (código 2xx), procedemos
    if (response.ok) {
      // Intentamos parsear JSON, si falla usamos un mensaje por defecto
      let data = { message: "Mensaje enviado exitosamente. ¡Gracias!" };
      try {
        data = await response.json();
      } catch (err) {}
      
      submitStatus.value = { type: "success", message: data.message || "Mensaje enviado correctamente" };
      formData.nombre = "";
      formData.email = "";
      formData.mensaje = "";
      
      // Registrar tiempo de envío exitoso
      localStorage.setItem("lastContactSubmit", Date.now().toString());
    } else {
      let errorData = { message: "Error al enviar el mensaje" };
      try {
        errorData = await response.json();
      } catch (err) {
        errorData.message = `Error HTTP ${response.status} del backend. Revisa VITE_API_URL.`;
      }
      submitStatus.value = { type: "error", message: errorData.message || "Error al enviar el mensaje" };
      // Reiniciar turnstile en caso de error
      if (window.turnstile) window.turnstile.reset();
    }
  } catch (error) {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    submitStatus.value = { type: "error", message: `Fallo de conexión hacia ${API_URL}. ¿Está encendido el backend?` };
    if (window.turnstile) window.turnstile.reset();
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  try {
    if (contactElement.value) {
      transitions.contact.setup(contactElement.value);
    }
  } catch (err) {
    console.warn("Animaciones silenciadas temporalmente por política del navegador:", err);
  }

  try {
    // Renderizar Turnstile explícitamente para evitar problemas con Vue/Vite
    const renderTurnstile = () => {
      if (window.turnstile && document.getElementById('turnstile-widget')) {
        window.turnstile.render('#turnstile-widget', {
          sitekey: '0x4AAAAAAD_WHKc5iJmkre-d',
          theme: 'auto'
        });
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else if (!document.getElementById('cf-turnstile-script')) {
      const script = document.createElement('script');
      script.id = 'cf-turnstile-script';
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = renderTurnstile;
      document.head.appendChild(script);
    }
  } catch (e) {
    console.error("Error cargando Turnstile:", e);
  }
});

onUnmounted(() => {
  try {
    transitions.contact.destroy();
  } catch (err) {}
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      
      <div class="contact-options">

        <div class="contact-card">
          <h3 class="contact-card-title">Envíame un mensaje</h3>
          <form @submit="handleSubmit" class="contact-form">
            <!-- Honeypot oculto para atrapar bots -->
            <input
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
              v-model="formData.website"
              class="contact-honeypot"
            />
            
            <input
              type="text"
              placeholder="Tu nombre"
              v-model="formData.nombre"
              required
              class="contact-input"
            />
            <input
              type="email"
              placeholder="tu@email.com"
              v-model="formData.email"
              required
              class="contact-input"
            />
            <textarea
              placeholder="Cuéntame sobre tu proyecto..."
              v-model="formData.mensaje"
              required
              rows="4"
              class="contact-input contact-textarea"
            ></textarea>

            <!-- Cloudflare Turnstile Widget -->
            <div id="turnstile-widget"></div>
            
            <div v-if="submitStatus" :class="['contact-status', `contact-status-${submitStatus.type}`]">
              {{ submitStatus.message }}
            </div>
            
            <button type="submit" :disabled="isSubmitting" class="contact-btn" data-cursor="arrow">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>
        </div>

        <div class="contact-card">
          <h3 class="contact-card-title">Documentos</h3>
          <div class="contact-links">
            <a href="/CristopherCuevas_CV.pdf" target="_blank" class="contact-btn" data-cursor="arrow-external">Ver CV</a>
            <a href="/Título .pdf" target="_blank" class="contact-btn" data-cursor="arrow-external">Título</a>
          </div>
        </div>
      </div>

      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin: var(--space-md) 0;

    @include mixins.mq("sm") {
      flex-direction: row;
      gap: var(--space-lg);
    }
  }

  &-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    flex: 1;

    &-title {
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-text-300);
    }
  }

  &-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &-input {
    width: 100%;
    padding: 12px 16px;
    background: rgba(0, 0, 0, 0.02);
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--color-text-400);
    font-family: inherit;
    font-size: var(--font-size-sm);
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--color-cyan-400);
      background: transparent;
    }
    
    &::placeholder {
      color: var(--color-text-300);
      opacity: 0.7;
    }
  }
  
  &-honeypot {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
  }

  &-textarea {
    resize: none;
  }

  &-status {
    padding: 10px;
    border-radius: 8px;
    font-size: var(--font-size-sm);
    text-align: center;
    font-weight: 700;

    &-success {
      background: rgba(0, 255, 100, 0.1);
      color: #00ff64;
    }

    &-error {
      background: rgba(255, 0, 0, 0.1);
      color: #ff4a4a;
    }
  }

  &-btn {
    display: inline-block;
    padding: 12px 16px;
    background: var(--color-cyan-400);
    color: var(--color-background);
    border-radius: 8px;
    font-weight: 700;
    font-size: var(--font-size-sm);
    text-align: center;
    transition: transform 0.2s ease, background 0.2s ease;
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
      background: var(--color-text-100);
    }
  }
}
</style>
