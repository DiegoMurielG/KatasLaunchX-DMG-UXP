<template>
    <div class="colorPallete">
        <div class="container">
            <div class="c1">#F5E6CA</div>
            <div class="c2">#FB9300</div>
            <div class="c3">#F54748</div>
            <div class="c4">#343F56</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColorPallete',
}
</script>

<style scoped>

    .colorPallete{
        text-align: center;
        color: rgb(255, 255, 255);
        font-size: 38px;
    }

    .c1{
        width: 50%;
        height: 100px;
        background-color: #F5E6CA;
    }

    .c2{
        width: 50%;
        height: 100px;
        background-color: #FB9300;
    }

    .c3{
        width: 50%;
        height: 100px;
        background-color: #F54748;
    }

    .c4{
        width: 50%;
        height: 100px;
        background-color: #343F56;
    }

</style>