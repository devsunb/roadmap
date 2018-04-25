<template>
    <div>
        <button type="button" class="btn navbar-btn" @click="toggleSideBar">
            <img src="/static/sidebar_toggle.png">
        </button>
        <nav id="sidebar">
            <button type="button" class="btn dismiss pb-5" @click="dismiss">
                <img src="/static/x.png">
            </button>
        </nav>
    </div>
</template>

<script>
export default {
    name: "side-bar",
    mounted: function() {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    },
    methods: {
        toggleSideBar: function() {
            $("#sidebar").addClass("active");
            $(".collapse.in").toggleClass("in");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
        },
        dismiss: function() {
            $("#sidebar").removeClass("active");
        }
    }
};
</script>

<style scoped>
.navbar-btn {
    position: fixed;
    top: 0;
    right: 0;
    width: 48px;
    height: 100vh;
    z-index: 998;
    border-radius: 0;
    background-color: rgba(255, 255, 255, 0.2);
}

.navbar-btn:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: -3px 0px 5px rgba(0, 0, 0, 0.2);
}

#sidebar {
    width: 368px;
    position: fixed;
    top: 88px;
    right: -368px;
    height: 100vh;
    z-index: 999;
    background: #e8e3ec;
    color: black;
    transition: all 0.3s;
    overflow-y: scroll;
}

#sidebar.active {
    right: 0;
}

.dismiss {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    line-height: 35px;
    text-align: center;
    background: #e8e3ec;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: white;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: white;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: black;
    background: white;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
    color: black;
    background: white;
}

a[data-toggle="collapse"] {
    position: relative;
}

a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
    content: "\e259";
    display: block;
    position: absolute;
    right: 20px;
    font-family: "Glyphicons Halflings";
    font-size: 0.6em;
}
a[aria-expanded="true"]::before {
    content: "\e260";
}

@media (max-width: 1400px) {
    .navbar-btn {
        width: 40px;
    }
}
</style>
