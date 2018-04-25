<template>
  <div>
    <top-bar></top-bar>
    <side-bar></side-bar>
    <div class="item">
        <div class="title">프로그래밍 언어</div>
        <div class="description">프로그래밍 언어는 컴퓨터 시스템을 구동시키는 소프트웨어를 작성하기 위한 언어이다. 고급 언어일수록 사람이 사용하는 언어에 가깝다. 일반적으로 말할 때에는 프로그래밍 언어를 지원하는 소프트웨어, 곧 소프트웨어를 작성하기 위한 소프트웨어를 가리키는 때가 많고, 이때에는 프로그래밍 언어와 소프트웨어를 구분하지 않고 소프트웨어를 프로그래밍 언어로 보기도 한다. 예를 들면, 델파이는 프로그래밍 언어인 오브젝트 파스칼을 지원하는 소프트웨어를 작성하기 위한 소프트웨어일 뿐이지만, 델파이를 별개의 프로그래밍 언어로 보는 때가 더 많다.</div>
        <div class="shelf youtube">
            <div class="row h-100">
                <div class="col-2 my-auto text-right">
                    <img src="/static/youtube.png" class="pb-3">
                </div>
                <div class="col-9 v-scroll">
                    <div class="h-100 d-table">
                        <div class="d-table-cell align-middle">
                            <div class="scroll-box">
                                <div class="float-left shelf-slot">
                                    <div class="thumbs">
                                        <span class="mr-5"><img src="/static/thumb_up.png" class="mr-3 pb-1">000</span><span><img src="/static/thumb_down.png" class="mr-3 pb-1">000</span>
                                    </div>
                                    <div class="live">
                                        <iframe width="280" height="170" src="https://www.youtube.com/embed/xo20E9Gjono" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                                    </div>
                                    <div class="meta">
                                        <p class="title mt-2 mb-1">[브베] 브생화 ver 2</p>
                                        <p class="date">00일 전</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 my-auto text-center">
                    <img src="/static/right.png" class="pb-3">
                </div>
            </div>
        </div>
        <div class="shelf yes24">
            <div class="row h-100">
                <div class="col-1 my-auto text-center">
                    <img src="/static/left.png" class="pb-3">
                </div>
                <div class="col-9 v-scroll">
                    <div class="h-100 d-table">
                        <div class="d-table-cell align-middle">
                            <div class="scroll-box">
                                <div class="float-right shelf-slot">
                                    <div class="thumbs">
                                        <span>000<img src="/static/thumb_down.png" class="mr-3 pb-1"></span><span class="mr-4">000<img src="/static/thumb_up.png" class="mr-3 pb-1"></span>
                                    </div>
                                    <div class="live border border-white text-white">
                                        asdf
                                    </div>
                                    <div class="title border border-white text-white">
                                        asdf
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 my-auto text-left">
                    <img src="/static/yes24.png" class="pb-3">
                </div>
            </div>
        </div>
        <div class="footer d-table">
            <div class="d-table-cell align-middle">
                <img src="/static/icon.png">
            </div>
        </div>
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

.v-scroll {
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
}
.v-scroll .scroll-box {
    width: 9999%;
}
.youtube .v-scroll {
    direction: ltr;
}
.yes24 .v-scroll {
    direction: rtl;
}

.shelf {
    position: relative;
    left: 0;
    width: 100%;
    height: 400px;
    margin-top: 80px;
}
.shelf.youtube {
    background-color: #292929;
}
.shelf.youtube .shelf-slot {
    width: 320px;
    height: 280px;
}
.shelf.youtube .shelf-slot > .thumbs {
    height: 40px;
}
.shelf.youtube .shelf-slot > .live {
    height: 170px;
}
.shelf.youtube .shelf-slot > .meta {
    height: 70px;
}
.shelf.youtube .shelf-slot > .meta > .title {
    font-size: 15px;
}
.shelf.youtube .shelf-slot > .meta > .date {
    font-size: 13px;
}
.shelf.yes24 {
    background-color: #2d5096;
}
.shelf.yes24 .shelf-slot {
    width: 240px;
    height: 295px;
}
.shelf.yes24 .shelf-slot > .thumbs {
    height: 35px;
}
.shelf.yes24 .shelf-slot > .live {
    height: 225px;
}
.shelf.yes24 .shelf-slot > .title {
    height: 35px;
}
.shelf-slot {
    color: white;
    padding-left: 20px;
    padding-right: 20px;
}
.shelf-slot > .thumbs {
    text-align: center;
    color: #999999;
}

.footer {
    background-color: #1e1e1e;
    width: 100%;
    height: 160px;
    margin-top: 200px;
    text-align: center;
}

@media (max-width: 1400px) {
    .item {
        width: 1400px;
    }
}
</style>
