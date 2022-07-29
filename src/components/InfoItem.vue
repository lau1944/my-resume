<template>
    <div class="info" @click="toLink">
        <img :src="src" width="65" height="65"/>
        <div class="tag">{{ tag }}</div>
        <div class="time">{{ time }}</div>
        <div class="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    props: ['src', 'redirect', 'text', 'tag', 'time'],
    methods: {
        toLink() {
            if (this.redirect) {
                window.open(this.redirect);
            }
        }
    }
}
</script>

<style scoped>
.info {
    padding: 35px 70px 85px 70px;
    font-family: monospace;
    cursor: pointer;
}

.tag {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
}

.time {
    color: gray;
    font-size: 12px;
}

.text {
    font-size: 14px;
    font-weight: 500;
    max-width: 450px;
    text-align: center;
    word-wrap: break-word
}
</style>