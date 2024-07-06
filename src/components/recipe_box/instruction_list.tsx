import { Instructions } from '@/lib/definitions'

export default function InstructionList(params: { instructions: Instructions })
{
    const instructions = params.instructions;
    instructions.sort((a, b) => a.ord - b.ord);
    return (
        <div>
            <ol>
                {instructions.map(instruction => <li> {instruction.ord} {instruction.description} </li>)}
            </ol>
        </div>
    );
}