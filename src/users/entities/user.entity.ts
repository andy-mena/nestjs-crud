import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm';

// Definimos el rol del usuario dentro del CRM
export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  AGENT = 'agent',
}

@Entity({ name: 'users' }) // Define el nombre explícito de la tabla en MySQL
export class User {
  @PrimaryGeneratedColumn('increment') // INT AUTO_INCREMENT PRIMARY KEY en MySQL
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  firstName!: string;

  @Column({ type: 'varchar', length: 100 })
  lastName!: string;

  @Column({ type: 'varchar', length: 150, unique: true }) // Evita emails duplicados
  email!: string;

  @Column({ type: 'varchar', length: 255, select: false }) // 'select: false' oculta el hash en las consultas por seguridad
  password!: string;

  @Column({ type: 'varchar', length: 20, nullable: true }) // El teléfono puede ser opcional al inicio
  phone!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  company!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.AGENT, // Por defecto, entran con rol básico de agente
  })
  role!: UserRole;

  @Column({ type: 'boolean', default: true }) // Permite desactivar usuarios sin borrarlos (Soft Delete manual)
  isActive!: boolean;

  // Campos de Auditoría automáticos
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;
}