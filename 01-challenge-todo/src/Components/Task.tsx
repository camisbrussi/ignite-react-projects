import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'

interface TaskProps {
  checked: boolean
  description: string
  onDelete: (description: string) => void
  onCheck: (description: string) => void
}

export function Task({ checked, description, onDelete, onCheck }: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox.Root
        className={styles.checkbox}
        checked={checked}
        onChange={() => onCheck(description)}
        id="c1"
      >
        <Checkbox.Indicator className={styles.indicator}>
          <Check size={16} weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className={styles.description}>{description}</span>
      <button type="button" onClick={() => onDelete(description)}>
        <Trash width={24} />
      </button>
    </div>
  )
}
