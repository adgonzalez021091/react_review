import { useMemo, useState } from "react";
interface user {
    name:String
    email:String
    date:string
  }
const Challenge = () => {
const [listUsers, setListUsers] = useState<user[]>([]);
  const emptyValue = { name: '', email: '', date: '' };
  const [user, setUser] = useState<user>(emptyValue);
  const [errors, setErrors] = useState(emptyValue);
  const validateUserAttribute = (attribute:"name"|"email"|"date", value:any) => {
    if (attribute == 'name') {
      if (value.length > 10) {
        setErrors({ ...errors, [attribute]: '' });
        return true;
      } else {
        setErrors({
          ...errors,
          [attribute]: 'Name must be larger than 10 characters',
        });
        return false;
      }
    }
    if (attribute == 'email') {
      if (value.includes('@')) {
        setErrors({ ...errors, [attribute]: '' });
        return true;
      } else {
        setErrors({ ...errors, [attribute]: 'Is not valid email' });
        return false;
      }
    }
    return true;
  };
  const validateUser = useMemo(() => {
    return (
      validateUserAttribute('name', user.name) &&
      validateUserAttribute('email', user.email) &&
      validateUserAttribute('date', user.date)
    );
  }, [user]);
  const updateUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.id == "name" || e.target.id == "email" || e.target.id == "date"){
    if (validateUserAttribute(e.target.id, e.target.value)) {
      setUser((prev) => {
        return { ...prev, [e.target.id]: e.target.value };
      });
    }}
  };
  const saveUser = () => {
    if (validateUser) {
      setListUsers((prev) => [...prev, user]);
      setUser({ name: '', email: '', date: '' });
    } else {
      alert('Check your users error');
    }
  };
  return (
    <>
      <h3>Load form</h3>
      <form>
        <div className="contenedor_label">
          <p className="flex justify-start w-9 font-bold">Name</p>
          <input type="text" id="name" onChange={(e)=>updateUser(e)}></input>
          {errors.name != '' && <span className="error">{errors.name}</span>}
        </div>
        <div className="contenedor_label">
          <p>Email</p>
          <input type="text" id="email" onChange={updateUser}></input>
          {errors.email != '' && <span className="error">{errors.email}</span>}
        </div>
        <div className="contenedor_label">
          <p>Date</p>
          <input
            type="date"
            id="date"
            onChange={updateUser}
            value={user.date}
          ></input>
          {errors.date != '' && <span className="error">{errors.date}</span>}
        </div>
        <button type="button" onClick={saveUser}>
          Save
        </button>
      </form>
      <h3>Current data</h3>
      <div className="contenedor_label">
        <p>Name</p>
        {user.name}
      </div>
      <div className="contenedor_label">
        <p>Email</p>
        {user.email}
      </div>
      <div className="contenedor_label">
        <p>Date</p>
        {user.date}
      </div>
      <h3>List of saved users</h3>
      <tbody>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
        {listUsers.map((User) => {
          return (
            <tr>
              <td>{User.name}</td>
              <td>{User.email}</td>
              <td>{User.date}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );}
  export default Challenge