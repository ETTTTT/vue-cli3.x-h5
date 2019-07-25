import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant'
// import loading from '../../components/Loading'
export default {
    name: viewName.home,
    components: {
    },
    data () {
        return {

        }
    },

    computed: {
        ...mapState({
            isWeixin : ({appInfo}) => appInfo.isWeixin
        }),
    },
    created () {
    },
    activated () {
        this.$emit('setHeader', {
            title: 'home',
        })
    },
    mounted () {
        // loading.show()
        // this.$ajax.get('getgoods').then(res => {
        //     console.log(res)
        //     loading.hide()
        // })
    },
    methods: {
        ...mapActions([
            'checkIsWeixin'
        ]),
        goUrl () {
            this.$router.push({
                path: '/login'
            })
            this.checkIsWeixin(true)
        },

    },
    destroyed () {

    },
}
