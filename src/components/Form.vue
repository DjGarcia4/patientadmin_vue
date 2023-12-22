<script setup>
import { computed } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const $toast = useToast();

const emit = defineEmits([
  "update:pet",
  "update:owner",
  "update:mail",
  "update:departure",
  "update:symptoms",
  "save-patient",
]);
const props = defineProps({
  id: {
    type: [String, null],
    require: true,
  },
  pet: {
    type: String,
    require: true,
  },
  owner: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  departure: {
    type: String,
    require: true,
  },
  symptoms: {
    type: String,
    require: true,
  },
});

const handleSubmit = () => {
  if (Object.values(props).includes("")) {
    $toast.error("Please fill all fields");
    return;
  }
  emit("save-patient");
};
const editing = computed(() => {
  return props.id;
});
</script>

<template>
  <div class="md:w-1/2 mb-4">
    <h2 class="font-black text-3xl text-center text-slate-600">
      Patient Tracking
    </h2>
    <p class="text-lg mt-5 text-center mb-10">
      Add <span class="text-orange-500">Patients</span> and manage them.
    </p>
    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-10 shadow-md rounded-lg mx-5 animate__animated animate__backInLeft"
    >
      <div class="mb-5">
        <label for="pet" class="block text-gray-700 font-bold uppercase"
          >Pet Name</label
        >
        <input
          :value="pet"
          @input="$emit('update:pet', $event.target.value)"
          type="text"
          id="pet"
          class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
          placeholder="Enter Pet Name"
        />
      </div>
      <div class="mb-5">
        <label for="owner" class="block text-gray-700 font-bold uppercase"
          >Owner Name</label
        >
        <input
          type="text"
          id="owner"
          class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
          placeholder="Enter Owner Name"
          @input="$emit('update:owner', $event.target.value)"
          :value="owner"
        />
      </div>
      <div class="mb-5">
        <label for="email" class="block text-gray-700 font-bold uppercase"
          >E-mail</label
        >
        <input
          type="email"
          id="email"
          class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
          placeholder="Enter E-mail"
          @input="$emit('update:mail', $event.target.value)"
          :value="mail"
        />
      </div>
      <div class="mb-5">
        <label for="departure" class="block text-gray-700 font-bold uppercase"
          >Departure Date</label
        >
        <input
          type="date"
          id="departure"
          class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
          placeholder="Enter Departure Date"
          @input="$emit('update:departure', $event.target.value)"
          :value="departure"
        />
      </div>
      <div class="mb-5">
        <label for="symptoms" class="block text-gray-700 font-bold uppercase"
          >Symptoms</label
        >
        <textarea
          id="symptoms"
          cols="30"
          rows="10"
          class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptoms"
          @input="$emit('update:symptoms', $event.target.value)"
          :value="symptoms"
        ></textarea>
      </div>
      <input
        type="submit"
        class="bg-orange-500 w-full text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors rounded-md p-2"
        :value="[editing ? 'Edit Patient' : 'Register Patient']"
      />
    </form>
  </div>
</template>
