<template>
    <nav class="flex items-center justify-between bg-gray-100 p-4">
        <div class="font-bold">
            <a class="text-gray-800" href="/">Fart Plays</a>
        </div>
        <div class="flex">
            <a class="mr-4 text-gray-800" href="/fardbux">FardBux</a>
            <a class="mr-4 text-gray-800" href="/carde-farde">Carde Farde</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
.navbar {
    background-color: #f5f5f5;
    padding: 1rem;
}

.navbar-brand {
    font-weight: bold;
}

.navbar-item {
    margin-right: 1rem;
}
</style>
