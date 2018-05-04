export default function ({ store, error, redirect, req }) {
  console.log(store.state.token)
  if (!store.state.token) {
    /* error({
      message: 'cookie失效或未登录，请登录后操作',
      statusCode: 403
    }) */
    redirect('/login')
  }
}
