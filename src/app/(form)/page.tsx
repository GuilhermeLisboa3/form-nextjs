"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Button, ListStar } from "@/components/ui";
import { MultipleChoice, SubTitle, TextArea, InputCheck, InputRadio } from './components'
import { FormProvider, useForm } from "react-hook-form";


export default function Home() {
  const addForm = useForm()
  const { handleSubmit, formState: { errors }, register } = addForm

  const handleAddForm = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...addForm}>
      <main className="bg-gradient-form">
        <p className="text-gray-light font-semibold text-xs pl-16 max-[482px]:pl-3 max-[482px]:pt-3">Pesquisa de Satisfação</p>
        <div className="mx-auto w-[648px] mb-4 max-[653px]:w-[95%]">
          <h1 className="font-bold text-[2.5rem] text-white text-left max-[482px]:text-[1.5rem]">Pesquisa de Satisfação</h1>
          <form onSubmit={handleSubmit(handleAddForm)} className=" bg-white mb-4 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold">Título da pergunta deve ficar aqui</h2>
            <p className="text-sm pt-2">Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário</p>
            <div className="flex gap-4 mb-8">
              <ListStar quantity={5}/>
            </div>
            {errors.rating && <span className='text-xs text-red-600'>Campo obrigatório</span>}
            <h2 className="text-2xl font-semibold">Título da pergunta deve ficar aqui</h2>
            <p className="text-sm pt-2">Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário</p>

            <div className="flex justify-between mt-5 mb-10">
              {[...Array(10)].map((x, index) => {
                const currentValue = index + 1
                return (
                <div key={index} className="flex flex-col items-center">
                <InputRadio name="radio" id={`${currentValue}`} value={`${currentValue}`} labelText={`${currentValue}`}/>
              </div>
              )
            })}
            </div>
            {errors.radio && <span className='text-xs text-red-600'>Campo obrigatório</span>}

            <div className="mb-8 h-auto">
              <SubTitle><>Descreva o motivo de sua avaliação <span className="text-gray-light text-sm">(opcional)</span></></SubTitle>
              <TextArea nameValidate="description1" className="w-full h-28" placeholder="Digite aqui..."/>
              {errors.description1 && <span className='text-xs text-red-600'>Campo obrigatório</span>}
            </div>

            <Select>
              <SelectTrigger className="w-full text-gray-light border border-gray-light bg-white rounded-sm p-4 focus:outline-none">
                <SelectValue placeholder="Qual loja você frequenta?" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="test">Testando</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col mt-5 mb-10 gap-2">
              <h3 className="font-medium text-base">Pergunta de escolha única?</h3>
              <div className="flex gap-2">
                <InputRadio name="radio2" id='yes' value='yes' labelText='Sim'/>
                <InputRadio name="radio2" id='no' value='no' labelText='Não'/>
              </div>
            </div>
            {errors.radio2 && <span className='text-xs text-red-600'>Campo obrigatório</span>}

            <div className="flex flex-col gap-1">
              <SubTitle>Pergunta de múltipla escolha?</SubTitle>
              <div className="flex flex-wrap gap-2">
                  <MultipleChoice value="OPC1" id="OPC1" inputName="checkout" labelText="OPC 1"/>
                  <MultipleChoice value="OPCAO2" id="OPCAO2" inputName="checkout" labelText="OPCÃO 2"/>
                  <MultipleChoice value="OP2" id="OP2" inputName="checkout" labelText="OP"/>
                  <MultipleChoice value="OPCAO4" id="OPCAO4" inputName="checkout" labelText="OPCÃO 4"/>
                  <MultipleChoice value="OPCAO5" id="OPCAO5" inputName="checkout" labelText="OPCÃO 5"/>
                  <MultipleChoice value="OP" id="OP" inputName="checkout" labelText="OP"/>
                  <MultipleChoice value="OPC7" id="OPC7" inputName="checkout" labelText="OPC 7"/>
                  <MultipleChoice value="OPC" id="OPC" inputName="checkout" labelText="OPC"/>
              </div>
            </div>
            {errors.checkout && <span className='text-xs text-red-600'>Campo obrigatório</span>}
            
            <div className="flex flex-col gap-1 mt-5">
              <SubTitle>Pergunta de múltipla escolha?</SubTitle>
              <div className="flex flex-col gap-3 justify-between">
                {[...Array(10)].map((x, index) => {
                  const currentValue = index + 1
                  return (
                  <div key={index} className="flex gap-5 items-center">
                    <InputCheck name={'checkout2'} id={`OPC-check-${currentValue}`} value={`OPC${currentValue}`} labelText={`OPC ${currentValue}`}/>
                  </div>
                  )
                })}
              </div>
            </div>
            {errors.checkout2 && <span className='text-xs text-red-600'>Campo obrigatório</span>}

            <div className="mt-8 h-auto">
              <SubTitle>Pergunta de texto?</SubTitle>
              <TextArea nameValidate="description2" className="w-full h-44" placeholder="Digite aqui..."/>
              {errors.description2 && <span className='text-xs text-red-600'>Campo obrigatório</span>}
            </div>

            <div className="my-8 h-auto">
              <SubTitle>Pergunta de texto?</SubTitle>
              <TextArea nameValidate="description3" className="w-full h-44" placeholder="Digite aqui..."/>
              {errors.description3 && <span className='text-xs text-red-600'>Campo obrigatório</span>}
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </main>
    </FormProvider>
  )
}
