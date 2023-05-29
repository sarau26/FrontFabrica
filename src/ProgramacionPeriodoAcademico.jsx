import { AppRouter } from "./router/AppRouter";
import { JefeDepartamentoProvider } from "./context/JefeDepartamentoProvider";

export const ProgramacionPeriodoAcademcico = () => {

  return (
    <JefeDepartamentoProvider>
      <AppRouter/>
    </JefeDepartamentoProvider>
  )
}


