import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {type} from "@testing-library/user-event/dist/type";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({setOnSave, carForUpdate}) => {
        const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm ({
            mode:'all',
            resolver:joiResolver(carValidator)
        });


        useEffect(()=> {
            if (carForUpdate){
                setValue('brand', carForUpdate.brand, {shouldValidate:true})
                setValue('price', carForUpdate.price, {shouldValidate:true})
                setValue('year', carForUpdate.year, {shouldValidate:true})
            }
        },[carForUpdate])

        const save = (data) => {
            console.log (data);
            fetch ('http://owu.linkpc.net/carsAPI/v1/cars', {
                headers: {'content-type': 'application/json'},
                body: JSON.stringify (data),
                method: 'POST'
            })
                .then (value => {
                    if (!value.ok) {
                        throw Error ('error')
                    }
                    return value.json ()
                })
                .then (() => {
                        setOnSave (prev => !prev)
                        reset ()
                    }
                )
        }

        return (
            <div>
                <form onSubmit={handleSubmit (save)}>
                    <label> <input type="text" placeholder={'brand'} {...register ('brand',
                        {required:true})}/>
                    </label>
                    {errors.brand && <span>{errors.brand.message}</span>}
                    <label> <input type="text" placeholder={'price'} {...register ('price',
                        {
                            valueAsNumber: true,
                            // required:true,
                            // min:{value:0, message:'price must be gte 0'},
                            // max:{value:1000000, message:'price must be lte 1000000'}
                        })}/>
                    </label>
                    {errors.price && <span>{errors.price.message}</span>}
                    <label> <input type="text" placeholder={'year'} {...register ('year',
                        {
                            valueAsNumber:true,
                            // required:true,
                            // min:{value:1990, message:'year must be gte 1990'},
                            // max: {value:new Date().getFullYear(), message:'year must be lte present Date'}
                        })}/>
                    </label>
                    {errors.year && <span>{errors.year.message}</span>}
                    <button disabled={!isValid}>Save</button>
                </form>
            </div>
        );
    }
;

export {CarForm};