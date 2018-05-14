<template>
  <div>
    <top-bar></top-bar>
    <side-bar></side-bar>
    <div class="item">
        <div class="title">프로그래밍 언어</div>
        <div class="description">프로그래밍 언어는 컴퓨터 시스템을 구동시키는 소프트웨어를 작성하기 위한 언어이다. 고급 언어일수록 사람이 사용하는 언어에 가깝다. 일반적으로 말할 때에는 프로그래밍 언어를 지원하는 소프트웨어, 곧 소프트웨어를 작성하기 위한 소프트웨어를 가리키는 때가 많고, 이때에는 프로그래밍 언어와 소프트웨어를 구분하지 않고 소프트웨어를 프로그래밍 언어로 보기도 한다. 예를 들면, 델파이는 프로그래밍 언어인 오브젝트 파스칼을 지원하는 소프트웨어를 작성하기 위한 소프트웨어일 뿐이지만, 델파이를 별개의 프로그래밍 언어로 보는 때가 더 많다.</div>
    </div>
    <div class="overlay" v-if="sidebar" @click="closeSidebar"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import store from "../store";
import CONSTNAT from "../constant";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default {
    name: "item",
    components: { TopBar, SideBar },
    computed: mapState(["sidebar"]),
    methods: {
        closeSidebar: function() {
            store.commit(CONSTNAT.TOGGLE_SIDEBAR, false);
        }
    }
};
</script>

<style scoped>
.row {
    margin-left: 0;
    margin-right: 0;
}
*[class^="col-"] {
    padding: 0;
}

.item {
    margin-top: 240px;
}
.item > .title {
    margin-left: 240px;
    font-size: 48px;
}

.description {
    margin-top: 64px;
    padding: 0 240px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 997;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
}

@media (max-width: 1400px) {
    .item {
        width: 1400px;
    }
}
</style>
