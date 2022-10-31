import userEvent from "@testing-library/user-event"

const User = {
name:"Hedy Lamarr",
imageUrl:'https://i.imgur.com/uiytf34uy.jpg',
imageSize: 90,

}

function Profile() {
    return(
        <>
        <h1>{user.name}</h1>
        <img
src={user.imageUrl}
alt={'photo of'+user.name}
style = {{
    width: user.imageSize,
    height: user.imageSize,
}}
/>
</>
    )
}
function myButton() {
return (
    <button>
        I'm a button
    </button>
)
}
export default function myApp(){
    return (
        <div>
            <h1>Welcome to my App </h1>
            <Button />
            <Profile />
        </div>
    )
}