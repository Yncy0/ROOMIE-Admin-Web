<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem>([
  [
    { label: "Roomie", type: "label" },
    {
      label: "Home",
      icon: "i-lucide-house",
      to: "/",
    },
    {
      label: "Booked Rooms",
      icon: "i-lucide-book",
      to: "/booked-rooms",
    },
    {
      label: "Users",
      icon: "i-lucide-users",
      to: "/users",
    },
    {
      label: "Buildings",
      icon: "i-lucide-building-2",
      to: "/buildings",
    },
    {
      label: "Rooms",
      icon: "i-lucide-grip",
      to: "/rooms",
    },
    {
      label: "Schedule",
      icon: "i-lucide-calendar-days",
      to: "/schedule",
    },
    {
      label: "Activity Logs",
      icon: "i-lucide-logs",
      to: "/activity-logs",
    },
    {
      label: "Archive",
      icon: "i-lucide-archive",
      to: "/archive",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-48 h-screen"
  />
</template>
