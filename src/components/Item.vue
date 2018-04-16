<template>
  <div id="item">
    <top-bar></top-bar>
    <side-bar></side-bar>
    <div class="row">
        <div class="p-5">asdfasfdsas</div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default {
    name: "post",
    components: { TopBar, SideBar }
};
</script>

<style scoped>
.row {
    margin-top: 88px;
}
</style>
