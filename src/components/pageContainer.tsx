type Props = {
  children: JSX.Element
}

function PageContainer({children}: Props) {
  return (
    <div className="py-24 mx-auto lg:w-3/5 text-wet-asphalt dark:text-silver px-6 lg:px-0 font-ubuntu">
      {children}
    </div>
  )
}

export default PageContainer