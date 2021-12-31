import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Permission } from "../../models/permissions";

const RoleUpdate = (props: any) => {
    const [permissions, setPermissions] = useState([]);
    const [selected, setSeleted] = useState([] as number []);
    const [name, setName] = useState('');
    const [redirect, SetRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const response =  await axios.get('permissions');

                setPermissions(response.data);

                const {data} =  await axios.get(`roles/${props.match.params.id}`);

                setName(data.name);
                setSeleted(data.permissions.map((p: Permission) => p.id))
            }
        )()
    }, []);

    const check = (id: number) => {

        if (selected.some(s => s === id)) {
            setSeleted(selected.filter(s => s !== id))
            return;
        }
        setSeleted([...selected, id])
    }
    
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await axios.put(`roles/${props.match.params.id}`, {
            name,
            permissions: selected
        });

        SetRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/roles"/>
    }

    return (
        <Wrapper>
            <form onSubmit={ submit}>
                <div className="mb-3 mt-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col=sm-18">
                        <input className="form-control" 
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"> Permissions</label>
                    <div className="col-sm-10">
                        {permissions.map((p: Permission) => {
                            return (
                                <div className="form-check form-check-inline col-3" key={p.id}>
                                <input className="form-check-input" type="checkbox"
                                    value={p.id}
                                    checked={selected.some(s => s === p.id)}
                                    onChange={() => check(p.id)}
                                />
                                <label className="form-check-label">{p.name}</label>
                            </div>
                            )
                        })}
                       
                    </div>
                </div>

                <button className="btn btn-outline-secondary">Save</button>

            </form>
        </Wrapper>
    )
}

export default RoleUpdate;