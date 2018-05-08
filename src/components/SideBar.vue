<template>
    <div class="outer">
        <div class="inner">
            <button type="button" class="btn navbar-btn" @click="toggleList">
                <i class="fas fa-bars"></i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleVideo">
                <i class="fas fa-play"></i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleBook">
                <i class="fas fa-book"></i>
            </button>
            <button type="button" class="btn navbar-btn" @click="toggleDoc">
                <i class="fas fa-file-alt"></i>
            </button>
        </div>
        <nav class="sidebar" :class="[{active}, mode]">
            <button type="button" class="btn dismiss" :class="[mode]" @click="dismiss">
                <i class="fas fa-times"></i>
            </button>
            <div class="sidebar-content">
                <div v-if="mode == 'list'">
                    
                </div>
                <div v-if="mode == 'video'">
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
                <div v-if="mode == 'book'">
                    
                </div>
                <div v-if="mode == 'doc'">
                    
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "side-bar",
    mounted: function() {
        $(".sidebar-content").mCustomScrollbar({
            theme: "minimal"
        });
    },
    data: function() {
        return {
            mode: "list",
            active: false
        };
    },
    methods: {
        toggleList: function() {
            this.active = true;
            this.mode = "list";
        },
        toggleVideo: function() {
            this.active = true;
            this.mode = "video";
        },
        toggleBook: function() {
            this.active = true;
            this.mode = "book";
        },
        toggleDoc: function() {
            this.active = true;
            this.mode = "doc";
        },
        dismiss: function() {
            this.active = false;
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
    padding-left: 45px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.dismiss {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    z-index: 1;
    padding-top: 72px;
    background-color: #e8e3ec;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.dismiss.list {
    background-color: #e8e3ec;
    color: black;
}
.dismiss.video {
    background-color: #282828;
    color: white;
}
.dismiss.book {
    background-color: #2d5096;
    color: white;
}
.dismiss.doc {
    background-color: #e8e3ec;
    color: black;
}

.shelf-slot {
    color: white;
    padding-left: 20px;
    padding-right: 20px;
}
.shelf-slot > .thumbs {
    text-align: center;
    color: #999999;
    margin-bottom: 10px;
}
</style>
