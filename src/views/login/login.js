
import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant'

export default {
    name: viewName.login,
    components: {
    },
    data () {
        return {

        }
    },
    computed: {
        ...mapState({

        }),
    },
    created () {

    },
    activated () {
        this.$emit('setHeader', {
            title: 'login',
        })
    },
    mounted () {

    },
    methods: {
        ...mapActions([

        ]),
        goUrl () {
            this.$router.push({path: '/'})
        }

    },
    destroyed () {

    },
}
