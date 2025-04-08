export default function Friend({ friend }){

    const {name, phone, email, website, username, id } = friend;
    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <h2>id: {id}</h2>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <p>Website link: {website}</p>
            <p>User Name: {username}</p>
            
        </div>
    )
}