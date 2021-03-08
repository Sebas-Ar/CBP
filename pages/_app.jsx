import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'

const MyApp = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
)

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export async function getserverSideProps({ Component, ctx }) {
    const pageProps = Component.getserverSideProps
        ? await Component.getserverSideProps(ctx)
        : {}

    return { pageProps }
}

export default wrapper.withRedux(MyApp)
