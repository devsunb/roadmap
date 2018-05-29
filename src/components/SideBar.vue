<template>
    <div class="outer">
        <div class="inner">
            <button type="button" class="btn navbar-btn" @click="toggleList">
                <i class="material-icons">menu</i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleVideo">
                <i class="material-icons play">play_arrow</i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleBook">
                <i class="material-icons">book</i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleDoc">
                <i class="material-icons">file_copy</i>
            </button>
        </div>
        <nav class="sidebar" :class="[{active:sidebar}, mode]">
            <div class="sidebar-content">
                <div v-if="mode == 'list'">
                    <div class="list">
                        <div class="row parent">
                            <div class="col-9 pr-0">
                                <div class="meta">
                                    <div class="title">제목</div>
                                    <div class="subtitle">부제목</div>
                                </div>
                            </div>
                            <div class="col-3 pl-0">
                                <div class="toggle" @click="toggleSub(12)">
                                    <div class="d-table-cell align-middle text-center">
                                        <i class="material-icons menu-12">menu</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row child-12">
                            <div class="col-12">
                                <div class="meta">
                                    <div class="title">제목</div>
                                    <div class="subtitle">부제목</div>
                                </div>
                            </div>
                        </div>
                        <div class="row item">
                            <div class="col-12">
                                <div class="meta">
                                    <div class="title">제목</div>
                                    <div class="subtitle">부제목</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 'video'">
                    <div class="logo">
                        <div>
                            <img src="/static/youtube.png" alt="Youtube" width="160">
                        </div>
                    </div>
                    <div class="video-slot">
                        <div class="thumbs">
                            <span class="up"><i class="material-icons">thumb_up</i><span>000</span></span>
                            <span class="down"><i class="material-icons">thumb_down</i>000</span>
                        </div>
                        <div class="live">
                            <iframe width="320" height="180" src="https://www.youtube.com/embed/xo20E9Gjono" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="meta">
                            <p class="title mt-2 mb-1">[브베] 브생화 ver 2</p>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 'book'">
                    <div class="book-slot">
                        <div class="row">
                            <div class="col-6">
                                <iframe width="180" height="280" src="https://www.youtube.com/embed/xo20E9Gjono" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div class="col-6">
                                <div class="description">
                                    <div class="meta">
                                        <p class="title mt-2 mb-1">[브베] 브생화 ver 2</p>
                                        <p class="writer">00일 전</p>
                                    </div>
                                    <div class="thumbs">
                                        <span class="up"><i class="material-icons">thumb_up</i><span>000</span></span>
                                        <span class="down"><i class="material-icons">thumb_down</i>000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 'doc'">
                    <div class="logo">
                        <div>
                            D O C U<br>
                            M E N T
                        </div>
                    </div>
                    <div class="doc-slot">
                        <div class="meta">
                            <p class="title">상어 가족 스페셜 | 모든 버전의 상어 가족 ...</p>
                            <p class="link">https://www.youtube.com/watch?v=cq_JzIjis40</p>
                            <p class="desc">상어 가족 스페셜☆ | 모든 버전의 상어 가족 총집합! | 국악놀이 상어 가
족, 할로윈 상어 가족, 그리고 재밌는 상어 가족 게임까지! ...</p>
                        </div>
                        <div class="thumbs">
                            <span class="up"><i class="material-icons">thumb_up</i><span>000</span></span>
                            <span class="down"><i class="material-icons">thumb_down</i>000</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState } from "vuex";

import store from "../store";
import CONSTANT from "../constant";

export default {
    name: "side-bar",
    mounted: function() {
        // $(".sidebar-content").mCustomScrollbar({
        //     theme: "minimal"
        // });
    },
    data: function() {
        return {
            mode: "list"
        };
    },
    computed: mapState(["sidebar"]),
    methods: {
        toggleList: function() {
            if (this.mode == "list" && this.sidebar) {
                store.commit(CONSTANT.TOGGLE_SIDEBAR, false);
            } else {
                this.mode = "list";
                store.commit(CONSTANT.TOGGLE_SIDEBAR, true);
            }
        },
        toggleVideo: function() {
            if (this.mode == "video" && this.sidebar) {
                store.commit(CONSTANT.TOGGLE_SIDEBAR, false);
            } else {
                this.mode = "video";
                store.commit(CONSTANT.TOGGLE_SIDEBAR, true);
            }
        },
        toggleBook: function() {
            if (this.mode == "book" && this.sidebar) {
                store.commit(CONSTANT.TOGGLE_SIDEBAR, false);
            } else {
                this.mode = "book";
                store.commit(CONSTANT.TOGGLE_SIDEBAR, true);
            }
        },
        toggleDoc: function() {
            if (this.mode == "doc" && this.sidebar) {
                store.commit(CONSTANT.TOGGLE_SIDEBAR, false);
            } else {
                this.mode = "doc";
                store.commit(CONSTANT.TOGGLE_SIDEBAR, true);
            }
        },
        toggleSub: function(id) {
            $(".child-" + id).toggleClass("active");
            var now = $(".list .toggle .menu-" + id).text();
            if (now == "menu") {
                $(".list .toggle .menu-" + id).text("clear");
            } else {
                $(".list .toggle .menu-" + id).text("menu");
            }
        }
    }
};
</script>

<style scoped>
.outer {
    position: fixed;
    display: table;
    top: 0;
    right: 0;
    padding-top: 72px;
    width: 72px;
    height: 100vh;
    z-index: 999;
    border-radius: 0;
}

.inner {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #ffffff;
    box-shadow: 0 0 4px 2px #888888;
}

.navbar-btn {
    width: 72px;
    height: 72px;
    padding: 0;
    border-radius: 0;
    background-color: #ffffff;
    color: #282828;
    font-size: 22px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.navbar-btn:hover {
    background-color: #282828;
    color: #ffffff;
}
.navbar-btn i {
    display: block;
}
.navbar-btn i.play {
    font-size: 30px;
}

.sidebar {
    width: 400px;
    position: fixed;
    top: 0;
    right: -328px;
    height: 100%;
    z-index: 998;
    padding-top: 72px;
    background-color: #e8e3ec;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.sidebar.active {
    right: 72px;
}
.sidebar.list {
    background-color: #e8e3ec;
    color: black;
}
.sidebar.video {
    background-color: #282828;
    color: white;
}
.sidebar.book {
    background-color: #2d5096;
    color: white;
}
.sidebar.doc {
    background-color: #ffde03;
    color: black;
}

.sidebar-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.sidebar-content .logo {
    display: table;
    width: 100%;
    height: 164px;
}
.sidebar-content .logo > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.list .meta {
    height: 90px;
    padding-left: 16px;
}
.list .parent .meta {
    background-color: #c5aed9;
}
.list *[class*="child-"] .meta {
    padding-left: 40px;
    background-color: #e1d4eb;
}
.list .meta > .title {
    padding-top: 23px;
    font-size: 20px;
}
.list .meta > .subtitle {
    font-size: 10px;
}
.list .toggle {
    display: table;
    width: 100%;
    height: 90px;
    padding-top: 5px;
}
.list .parent .toggle {
    background-color: #e1d4eb;
    cursor: pointer;
}
.list .toggle .material-icons {
    font-size: 35px;
}
*[class*="child-"] {
    display: none;
}
*[class*="child-"].active {
    display: block;
}

.video-slot {
    color: white;
    float: left;
    padding-left: 40px;
    padding-bottom: 40px;
}
.video-slot > .meta {
    text-align: center;
}
.video-slot > .thumbs {
    text-align: right;
    margin-bottom: 10px;
}

.book-slot {
    color: white;
    width: 100%;
    padding: 16px;
}
.book-slot .description {
    height: 100%;
}
.book-slot .description > .meta {
    position: absolute;
    top: 100px;
}
.book-slot .description > .meta > .writer {
    font-size: 12px;
    font-weight: normal;
}
.book-slot .description > .thumbs {
    text-align: right;
    position: absolute;
    bottom: 5px;
}

.doc-slot {
    color: black;
    height: 180px;
    width: 100%;
    padding: 24px;
}
.doc-slot > .meta {
    margin-bottom: 24px;
}
.doc-slot > .meta > .title {
    font-size: 18px;
    color: #2b1939;
    margin-bottom: 0;
}
.doc-slot > .meta > .link {
    font-size: 14px;
    color: #005a00;
    margin-bottom: 0;
}
.doc-slot > .meta > .desc {
    font-size: 12px;
    color: #5a5260;
    margin-bottom: 0;
}

.thumbs {
    font-size: 15px;
    color: #999999;
    cursor: pointer;
}
.thumbs > span:hover {
    color: #dddddd;
}
.thumbs > .up {
    margin-right: 25px;
}
.thumbs > .up > i,
.thumbs > .down > i {
    position: relative;
    top: 5px;
    padding-right: 10px;
}
</style>
