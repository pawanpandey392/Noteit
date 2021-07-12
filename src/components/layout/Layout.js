import MainNavigation from './MainNavigation'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className="container-fluid">
        <div className="pageContainer mt-3">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout;