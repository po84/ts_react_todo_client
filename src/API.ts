import axios, { AxiosResponse } from 'axios'
import config from './config'

const baseUrl: string = config.baseUrl

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get<ApiDataType>(
      baseUrl + '/todos'
    )
    return todos
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      name: formData.name,
      description: formData.description,
      status: false
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post<ApiDataType>(
      baseUrl + '/add-todo',
      todo
    )
    return saveTodo
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, 'status'> = {
      status: true
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put<ApiDataType>(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete<ApiDataType>(
      `${baseUrl}/delete-todo/${_id}`
    )
    return deletedTodo
  } catch (err) {
    console.log(err)
    throw err
  }
}