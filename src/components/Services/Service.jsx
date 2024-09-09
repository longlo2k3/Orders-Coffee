import PropTypes from 'prop-types'

const Service = (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
        <div className="w-[200px] h-[200px]">
                <img src={props.img} alt={props.name} className='img-shadow2 object-cover object-center hover:scale-110 duration-300 cursor-pointer'/>
        </div>
        <div className='flex flex-col justify-center items-center mt-6'>
          <h1 className='text-2xl font-bold text-primary '>{props.name}</h1>
          <p className=' md:w-[530px] sm:w-[300px] text-[15px] text-center leading-tight mt-4'>{props.desc}</p>
        </div>
    </div>
  )
}

Service.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Service