type FactoryMap = Record<string, () => any>;

export class Container<ContainerDefinition extends FactoryMap> {
  private instanceCache: any = {};
  private factoryMap: ContainerDefinition;

  constructor(factoryMap: ContainerDefinition) {
    this.factoryMap = factoryMap;
  }

  get<
    Identifier extends keyof ContainerDefinition,
    Instance extends ReturnType<ContainerDefinition[Identifier]>
  >(identifier: Identifier): Instance {
    if (!this.instanceCache[identifier]) {
      this.instanceCache[identifier] = this.factoryMap[identifier]();
    }

    return this.instanceCache[identifier] as Instance;
  }
}
