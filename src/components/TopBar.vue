<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand m-auto" href="#"><img src="/static/topbar-logo.png"></a>
            <button class="btn toggle-search my-2 my-sm-0" @click="searching = true" v-if="!searching"><i class="fas fa-search"></i></button>
            <form class="form-inline my-2 my-lg-0" v-if="searching">
                <input class="form-control search-input" type="search">
                <button class="btn search-btn my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: "top-bar",
    data: function() {
        return {
            searching: false
        };
    }
};
</script>

<style scoped>
.navbar {
    background-color: #2b1939;
    min-height: 72px;
}

.search-input {
    background-color: transparent;
    color: white;
    width: 300px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-input:focus {
    outline: none;
}

.toggle-search {
    background-color: transparent;
    color: white;
    position: absolute;
    right: 16px;
    border: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.search-btn {
    background-color: transparent;
    color: white;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-btn:focus {
    outline: none;
}
</style>
