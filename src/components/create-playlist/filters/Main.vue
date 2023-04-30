<template>
  <div>
    <select class="form-select" v-model="name">
      <option :value="null">Add filter</option>
      <option
        :value="f"
        v-for="f in allFilters"
      >
        {{ f.name }}
      </option>
    </select>
  </div>
  <div>
    <div>
      <label for="customRange1" class="form-label">Target</label>
      <input type="range" class="form-range" id="customRange1" v-model="target">
    </div>
    {{ target }}
  </div>
</template>

<script setup lang="ts">
import { useCreatePlaylistViewFilterStore } from '@/stores/views/create-playlist/filter';
import type Filter from '@/types/Filter';
import { storeToRefs } from 'pinia';
import { ref, type Ref } from 'vue';

const createPlaylistViewFilterStore = useCreatePlaylistViewFilterStore()
const { allFilters, filters } = storeToRefs(createPlaylistViewFilterStore)

const name: Ref<string | null> = ref(null)
const max: Ref<number> = ref(0)
const min: Ref<number> = ref(0)
const target: Ref<number> = ref(0)

const addFilter = (): void => {

}
</script>

<style scoped>

</style>