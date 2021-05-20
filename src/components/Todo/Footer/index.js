import './style.css';

const Footer = () => {
    return(
        <div>
            <form onSubmit=''>
                <div className="AppContainerWriteTodo">
                    <div className="form-floating mb-3 AppContainerWriteTodo1">
                        <input name='todowrite' type='text' className="form-control" placeholder='Digite a nova tarefa'/>
                        <label htmlFor='todowrite'>Nova Tarefa</label>
                    </div>
                    <div className="gap-2 AppContainerWriteTodo2">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Footer