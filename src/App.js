import Fields from './components/Fields'
import Logo from './components/Logo'
export default function App() {
  return (
    <h1 className="bg-[#1f293e] backdrop-blur-3xl h-screen flex justify-center items-center flex-col">
      <Logo />
      <Fields />
    </h1>
  )
}