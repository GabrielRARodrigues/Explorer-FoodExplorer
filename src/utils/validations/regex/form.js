export const emailRegex = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/g

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?\(\)&#])[A-Za-z\d@$!%*\(\)?&#]{8,}$/g

export const priceRegex = /^([1-9]+0*)*\d?\d\.\d\d?$/g

export const categoryRegex = /^(Refeição|Sobremesa|Bebida)$/g