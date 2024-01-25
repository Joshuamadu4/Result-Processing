export class CreateSubjectDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly class: string;
    readonly categoryId: number;
    readonly addedBy: string;
}
