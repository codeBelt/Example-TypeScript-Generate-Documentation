///<reference path='../events/EventDispatcher.ts'/>

/**
 * The {{#crossLink "DisplayObject"}}{{/crossLink}} class is the base class for all objects that can be placed on the display list.
 *
 * @class DisplayObject
 * @extends EventDispatcher
 * @constructor
 **/
class DisplayObject extends EventDispatcher
{
    /**
     * @copy EventDispatcher.CLASS_NAME
     */
    public CLASS_NAME:string = 'DisplayObject';

    /**
     * The isEnabled property is used to keep track of the enabled start of the DisplayObject.
     *
     * @property isEnabled
     * @type {boolean}
     * @default false
     * @protected
     */
    public isEnabled:boolean = false;

    /**
     * The isCreated property is used to keep track if it is the first time this DisplayObject is created.
     *
     * @property isCreated
     * @type {boolean}
     * @default false
     * @protected
     */
    public isCreated:boolean = false;

    /**
     * Returns the number of children of this object.
     *
     * @property numChildren
     * @type {init}
     * @default 0
     * @readonly
     */
    public numChildren:number = 0;

    /**
     * A reference to the child DisplayObject instances to this parent object instance.
     *
     * @property children
     * @type {array}
     * @readonly
     */
    public children:DisplayObject[] = [];

    constructor()
    {
        super();
    }

    /**
     * The createChildren function is intended to provide a consistent place for the creation and adding
     * of children to the view. It will automatically be called the first time that the view is added
     * to another DisplayObject. It is critical that all subclasses call the super for this function in
     * their overridden methods.
     *
     * @method createChildren
     * @override
     * @public
     */
    public createChildren():void
    {
        // JavaScript Code ...
    }

    /**
     * Adds a child DisplayObject instance to this parent object instance. The child is added to the front (top) of all other
     * children in this parent object instance. (To add a child to a specific index position, use the addChildAt() method.)
     *
     * If you add a child object that already has a different parent, the object is removed from the child
     * list of the other parent object.
     *
     * @method addChild
     * @param child {DisplayObject} The DisplayObject instance to add as a child of this DisplayObjectContainer instance.
     * @returns {DisplayObject} The DisplayObject instance that you pass in the child parameter.
     */
    public addChild(child:DisplayObject):DisplayObject
    {
        // JavaScript Code ...
    }

    /**
     * Removes the specified child object instance from the child list of the parent object instance.
     * The parent property of the removed child is set to null , and the object is garbage collected if no other references
     * to the child exist. The index positions of any objects above the child in the parent object are decreased by 1.
     *
     * @method removeChild
     * @param child {DisplayObject} The DisplayObject instance to remove.
     * @returns {DisplayObject} The DisplayObject instance that you pass in the child parameter.
     * @public
     */
    public removeChild(child:DisplayObject):DisplayObject
    {
        // JavaScript Code ...
    }

    /**
     * Removes all child DisplayObject instances from the child list of the DisplayObjectContainer instance.
     * The parent property of the removed children is set to null , and the objects are garbage collected if
     * no other references to the children exist.
     *
     * @method removeChildren
     * @returns {DisplayObject}
     */
    public removeChildren():DisplayObject
    {
        // JavaScript Code ...
    }

    /**
     * Adds a child DisplayObject instance to this DisplayObjectContainer instance.
     * The child is added at the index position specified. An index of 0 represents the back
     * (bottom) of the display list for this DisplayObjectContainer object.
     *
     * @method addChildAt
     * @param child {DisplayObject} The DisplayObject instance to add as a child of this object instance.
     * @param index {int} The index position to which the child is added. If you specify a currently occupied index position, the child object that exists at that position and all higher positions are moved up one position in the child list.
     * @returns {DisplayObject} The DisplayObject instance that you pass in the child parameter.
     */
    public addChildAt(child:DisplayObject, index:number):DisplayObject
    {
        // JavaScript Code ...
    }

    /**
     * Returns the child display object instance that exists at the specified index.
     *
     * @param index {int} The index position of the child object.
     * @returns {DisplayObject} The child display object at the specified index position.
     */
    public getChildAt(index:number):DisplayObject
    {
        // JavaScript Code ...
    }

    /**
     * The enable method is responsible for enabling all event listeners and enabling children of the view.
     *
     * @method enable
     * @public
     */
    public enable():void
    {
        // JavaScript Code ...
    }

    /**
     * The disable method is responsible for disabling all event listeners and disabling children of the view.
     *
     * @method disable
     * @public
     */
    public disable():void
    {
        // JavaScript Code ...
    }

    /**
     * The layoutComponent method provides a common function to handle updating child objects.
     *
     * @method layoutChildren
     */
    public layoutChildren():void
    {
        // JavaScript Code ...
    }

    /**
     * The purpose of the destroy method is to make an object ready for garbage collection. This
     * should be thought of as a one way function. Once destroy is called no further methods should be
     * called on the object or properties accessed. It is the responsibility of those who implement this
     * function to stop all running Timers, all running Sounds, remove any event
     * listeners and take any other steps necessary to make an object eligible for garbage collection.
     * It is critical that all subclasses call the super for this function in their overridden methods.
     *
     * @method destroy
     */
    public destroy():void
    {
        // JavaScript Code ...
    }

}