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
                            <p class="date">00일 전</p>
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
                            <p class="date">00일 전</p>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 'book'">
                    <div class="book-slot">
                        <div class="live">
                            <iframe width="180" height="280" src="https://www.youtube.com/embed/xo20E9Gjono" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="description">
                            <div class="meta">
                                <p class="title mt-2 mb-1">[브베] 브생화 ver 2</p>
                                <p class="date">00일 전</p>
                            </div>
                            <div class="thumbs">
                                <span class="up"><i class="material-icons">thumb_up</i><span>000</span></span>
                                <span class="down"><i class="material-icons">thumb_down</i>000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 'doc'">
                    
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
    background-color: #e8e3ec;
    color: black;
}

.sidebar-content {
    width: 100%;
    height: 100%;
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

.video-slot {
    color: white;
    float: left;
    padding-left: 40px;
}
.video-slot > .thumbs {
    margin-bottom: 10px;
}
.video-slot > .meta {
    text-align: center;
}

.book-slot {
    color: white;
    float: left;
    width: 100%;
    padding: 16px;
}
.book-slot > .live {
    float: left;
    width: 180px;
    height: 280px;
}
.book-slot > .meta {
    display: inline-block;
}
.book-slot > .thumbs {
    display: inline-block;
    width: 180px;
    vertical-align: bottom;
}

.thumbs {
    text-align: right;
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
