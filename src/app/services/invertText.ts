import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'invert'})

export class invertTextPipe implements PipeTransform {

    transform(value: string) {
        return value.split("").reverse().join("");
    }
}