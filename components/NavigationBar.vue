<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem>([
  { label: "Roomie", type: "label" },
  {
    label: "Dashboard",
    icon: "i-lucide-layout-dashboard",
  },
  {
    label: "Booked Rooms",
    icon: "i-lucide-book",
  },
  {
    label: "Users",
    icon: "i-lucide-users",
  },
  {
    label: "Building",
    icon: "i-lucide-building-2",
  },
  {
    label: "Rooms",
    icon: "i-lucide-grip",
  },
  {
    label: "Schedule",
    icon: "i-lucide-calendar-days",
  },
  {
    label: "Activity Logs",
    icon: "i-lucide-logs",
  },
  {
    label: "Archive",
    icon: "i-lucide-archive",
  },
]);
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-48"
  />
</template>
