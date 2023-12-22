<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { uid } from "uid";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Patient from "./components/Patient.vue";
import { useToast } from "vue-toast-notification";

const $toast = useToast();
const patients = ref([]);

const patient = reactive({
  id: null,
  pet: "",
  owner: "",
  mail: "",
  departure: "",
  symptoms: "",
});

watch(
  patients,
  () => {
    saveLocalStorage();
  },
  {
    deep: true,
  }
);

const saveLocalStorage = () => {
  localStorage.setItem("patients", JSON.stringify(patients.value));
};

onMounted(() => {
  const patientsStorage = localStorage.getItem("patients");
  if (patientsStorage) {
    patients.value = JSON.parse(patientsStorage);
  }
});

const savePatient = () => {
  if (patient.id) {
    const { id } = patient;
    const i = patients.value.findIndex(
      (patientState) => patientState.id === id
    );
    patients.value[i] = { ...patient };
    $toast.success("Patient edited successfully!");
    // Almacenar en el localStorage
  } else {
    patients.value.push({ ...patient, id: uid() });
    $toast.success("Patient added successfully!");
    localStorage.setItem("patients", JSON.stringify(patients.value));
  }
  Object.assign(patient, {
    id: null,
    pet: "",
    owner: "",
    mail: "",
    departure: "",
    symptoms: "",
  });
};

const editPatient = (id) => {
  const patientEdit = patients.value.filter((patient) => patient.id === id)[0];
  Object.assign(patient, patientEdit);
};

const deletePatient = (id) => {
  patients.value = patients.value.filter((patient) => patient.id !== id);
  $toast.warning("Patient deleted successfully!");
};
</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />
    <div class="md:flex mt-12">
      <Form
        v-model:pet="patient.pet"
        v-model:owner="patient.owner"
        v-model:mail="patient.mail"
        v-model:departure="patient.departure"
        v-model:symptoms="patient.symptoms"
        @save-patient="savePatient"
        :id="patient.id"
      />
      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        <h2 class="font-black text-3xl text-center text-slate-600">
          Manage Your Patients
        </h2>
        <div v-if="patients.length > 0">
          <p class="text-lg mt-5 text-center mb-10">
            <span class="text-orange-500">Patients</span> Information.
          </p>
          <Patient
            v-for="patient in patients"
            :patient="patient"
            @edit-patient="editPatient"
            @delete-patient="deletePatient"
          />
        </div>
        <p v-else class="text-lg mt-5 text-center mb-10">
          There are not <span class="text-orange-500">Patients</span> yet.
        </p>
      </div>
    </div>
  </div>
</template>
