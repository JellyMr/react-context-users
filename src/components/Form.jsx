import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import UserContext from '../Context/User/UserContext';
import Swal from 'sweetalert2';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { postUser, putUser } = useContext(UserContext);

    const onSubmit = async (data) => {

        const response = await postUser(data);
        Swal.fire({
            title: '¡Usuario registrado exitosamente!',
            html: `
                    <div class="text-start">
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">ID:</span>
                            <input type="text" class="form-control" value="${response.id}" readonly>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Nombre:</span>
                            <input type="text" class="form-control" value="${response.name}" readonly>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Trabajo:</span>
                            <input type="text" class="form-control" value="${response.job}" readonly>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Fecha:</span>
                            <input type="text" class="form-control" value="${new Date(response.createdAt).toLocaleString()}" readonly>
                        </div>
                    </div>
                `,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        reset();

    };

    const modificar = async (data) => {
        const response = await putUser(data);
        Swal.fire({
            title: '¡Usuario modificado exitosamente!',
            html: `
                    <div class="text-start">
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Nombre:</span>
                            <input type="text" class="form-control" value="${response.name}" readonly>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Trabajo:</span>
                            <input type="text" class="form-control" value="${response.job}" readonly>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text" style="width:100px">Fecha:</span>
                            <input type="text" class="form-control" value="${new Date(response.updatedAt).toLocaleString()}" readonly>
                        </div>
                    </div>
                `,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

    };

    const handleModificar = handleSubmit(modificar);

    return (
        <div className="container mt-5" style={{ maxWidth: '600px', margin: '3%' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className="form-group col-6 mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            placeholder="Name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <div className="invalid-feedback">El campo nombre es obligatorio</div>}
                    </div>
                    <div className="form-group col-6 mb-3">
                        <label htmlFor="job" className="form-label">Trabajo</label>
                        <input
                            type="text"
                            className={`form-control ${errors.job ? 'is-invalid' : ''}`}
                            id="job"
                            placeholder="Job"
                            {...register('job', { required: true })}
                        />
                        {errors.job && <div className="invalid-feedback">El campo trabajo es obligatorio</div>}
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <button
                        type="submit"
                        className="btn btn-success ">
                        Añadir
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={handleModificar}>
                        Modificar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
