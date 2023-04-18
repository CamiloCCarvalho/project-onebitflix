import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../database'

//interface for object
export interface Category {
    id: number
    name: string
    position: number
}

//attr for creation, during creation not have id
export interface CategoryCreationAttributes extends Optional<Category, 'id'> { }

//after instance object with sequelize types
export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category { }

export const Category = sequelize.define<CategoryInstance, Category>('Category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      position: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
      }
})