<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand" href="#">Learning DB</a>
            <form class="form-inline my-2 my-lg-0 mx-auto">
                <input class="form-control search-input" type="search">
                <button class="btn search-btn my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: "top-bar"
};
</script>

<style scoped>
.navbar {
    background-color: #2b1939;
}

.navbar-brand {
    margin: 16px 40px;
}

.search-input {
    background-color: transparent;
    color: white;
    width: 350px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-input:focus {
    outline: none;
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
