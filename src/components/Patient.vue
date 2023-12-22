<script setup>
const emit = defineEmits(["edit-patient", "delete-patient"]);
defineProps({
  patient: {
    type: Object,
    require: true,
  },
});
</script>

<template>
  <div
    class="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl animate__animated animate__backInUp"
  >
    <p class="font-bold mb-3 text-gray-700 uppercase">
      ID: {{ patient.id }}
      <span class="font-normal normal-case"> </span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">
      Nombre:
      <span class="font-normal normal-case">{{ patient.pet }}</span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">
      Propietario:
      <span class="font-normal normal-case">{{ patient.owner }}</span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">
      Email:
      <span class="font-normal normal-case">{{ patient.mail }}</span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">
      Fecha Alta:
      <span class="font-normal normal-case">{{ patient.departure }}</span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">
      Síntomas:
      <span class="font-normal normal-case">{{ patient.symptoms }}</span>
    </p>

    <div class="grid md:grid-cols-2 gap-5 mt-10">
      <button
        type="button"
        class="block w-full py-2 px-10 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase rounded-lg"
        @click="$emit('edit-patient', patient.id)"
      >
        Edit
      </button>

      <button
        type="button"
        class="block w-full py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
        @click="$emit('delete-patient', patient.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
