import GuestTemplate from "../../templates/layouts/GuestTemplate"


const Login = props => {
    return (
        <GuestTemplate>
            <main>
                <h1>Login page</h1>
            </main>
        </GuestTemplate>
    )
}

export const FooPage = () => (
    <GuestTemplate>
        <main>
            <h1>Foo page</h1>
        </main>
    </GuestTemplate>
)

export default Login