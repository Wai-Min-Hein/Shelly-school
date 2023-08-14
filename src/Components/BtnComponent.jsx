
const BtnComponent = ({text}) => {
  return (
    <button className="text-primary border-2 border-primary px-4 py-2 font-medium hover:text-white hover:border-0 hover:bg-btn-gradient duration-300 rounded-full">
        {text}
      
    </button>
  )
}

export default BtnComponent
