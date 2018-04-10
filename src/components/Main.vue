<template>
    <div class="main">
        <div class="row">
            <div class="col-7">
                <div class="d-table h-100 w-100">
                    <div class="d-table-cell align-middle title">
                        <p>LEARNING</p>
                        <p>DB.</p>
                    </div>
                </div>
            </div>
            <div class="col-5 main-right">
                <form class="form-inline justify-content-center search-form">
                    <input class="form-control" type="search">
                    <button class="btn my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main"
};
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background-image: url("/static/main.png");
    background-size: 100%;
    background-position: center;
    overflow: hidden;
}

.main-right {
    height: 100vh;
    background-color: purple;
}

.title {
    padding-right: 25%;
    text-align: right;
    font-size: 80px;
    font-weight: bold;
}

.search-form {
    margin-top: 60vh;
}
.search-form > input {
    background-color: transparent;
    color: white;
    width: 350px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-form > input:focus {
    outline: none;
}
.search-form > button {
    background-color: transparent;
    color: white;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-form > button:focus {
    outline: none;
}

@media (max-width: 1400px) {
    .main {
        background-size: 1400px;
    }
}
</style>
