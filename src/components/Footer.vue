<template>
    <footer>
        <div id="footer1" class="position-relative fixed-bottom py-2 text-center text-secondary bg-dark">
            <span class="text-white">All Rights Reserved @Metu Engineering Section</span>
            <div class="row py-6 mt-2">
                <ul>
                    <li>
                    <p class="text-white">Adress:Odtu Engineering Section Material Engineering</p>
                    </li>
                    <li>
                    <a href='mailto:metuedu@xyz.com?subject=me&body=Hello!' class="text-white">Contact us!</a>
                    </li>
                </ul>            
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',

    methods: {
        mailTo(){
        window.location("mailto:xys@metuedu.com")
        console.log('mail!')
      }
    }
}

</script>

<style scoped>
#footer1 {
    background-image: url('../assets/moreblack.jpg');
    background-size: cover;
    color: white;
}
</style>