// write your custom hook here to control your checkout form
const useForm = () => {
    const values = {}

    const handleChanges = (e) => {
        const {name, value} = e.target
        
    }
    return [values, handleChanges]
}
export default useForm;