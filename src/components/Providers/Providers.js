import React, { useEffect, useState } from 'react'
import {
  AliasProvider,
  AreaProvider,
  ButtonProviderArea, ContentProvider, ImgIconProvider, NameProvider,
  ProviderWrapper, ScrollbarsCustom,
  SearchProvider, SearchProviderWrapper,
  TagAreaProvider,
  TagProvider,
} from './ProvidersStyled'
import { SearchOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import { Col, Row } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars';
import { toJS } from 'mobx'

const _ = require('lodash')

const Providers = props => {
  const { providerStore, commonStore, selectedProvider, handleSelectedProvider, placeholder } = props
  const [ searchText, setSearchText ] = useState("");
  const [ activeProviderChooseAll, setActiveProviderChooseAll ] = useState(true);
  const [ listData, setListData ] = useState([]);
  const [ selectedProviderArea, setSelectedProviderArea] = useState(null);

  useEffect(() => {
    providerStore.getProviderAreas()
  }, []);

  useEffect(() => {
    providerStore.getProviders()
      .then(res => {
        setListData(res);
      })
  }, []);

  const handlerSetSelectProvider = (value) => {
    handleSelectedProvider(value);
  }

  const handlerSetSelectProviderArea = (e) => {
    let obj = toJS(e);
    let arr = providerStore.providers.filter(item => item.areaId == obj?.id);
    setListData(arr);
    setActiveProviderChooseAll(false);
    setSelectedProviderArea(e);
  }

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleOnKeyUp = (value) => {
    if (value.keyCode === 13) {
      handleSearchProvider(value);
    }
  }

  const handleSearchProvider = () => {
    if (searchText === "") {
      handleResetFilter();
    } else {
      let obj = providerStore.areas.find(item => item.area.toLowerCase() === searchText.toLowerCase());
      setSelectedProviderArea(obj);
      handlerSetSelectProviderArea(obj);
      setActiveProviderChooseAll(false);
    }
  }

  const handleResetFilter = () => {
    setListData(providerStore.providers);
    setActiveProviderChooseAll(true);
    setSelectedProviderArea(null);
  }

  return (
    <ProviderWrapper>
      <SearchProviderWrapper>
        <SearchProvider
          placeholder={placeholder}
          suffix={
            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '20px' }} onClick={() => handleSearchProvider()}/>
          }
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
        />
      </SearchProviderWrapper>
      <TagProvider>
        <ScrollbarsCustom style={{ width: '100%', height: 78 }}>
          <ButtonProviderArea onClick={() => handleResetFilter()} backgroundColor={activeProviderChooseAll ? commonStore.appTheme.solidColor: '#9CA2C0'}>
            Tất cả
          </ButtonProviderArea>
          {
            providerStore.areas.map(item =>
              <ButtonProviderArea
                onClick={() => handlerSetSelectProviderArea(item)}
                key={item.id}
                backgroundColor={selectedProviderArea?.id === item.id ? commonStore.appTheme.solidColor: '#9CA2C0'}>
                {item.area}
              </ButtonProviderArea>
            )
          }
        </ScrollbarsCustom>
      </TagProvider>
      <AreaProvider>
        <Scrollbars style={{ width: '100%', height: 218 }}>
          <Row>
            {
              listData.map(item =>
                (
                  <Col span={12} key={item.id}>
                    <TagAreaProvider borderColor={item.id === selectedProvider?.id ? '#0465B0' : '#E0E0E0'} onClick={() => handlerSetSelectProvider(item)}>
                      <ImgIconProvider>
                        <img src={require('../../media/icons/icon_provider.svg')} alt={'icon_provider.svg'} />
                      </ImgIconProvider>
                      <ContentProvider>
                        <AliasProvider>{item.area}</AliasProvider>
                        <NameProvider>{item.name}</NameProvider>
                      </ContentProvider>
                    </TagAreaProvider>
                  </Col>
                )
              )
            }
          </Row>
        </Scrollbars>
      </AreaProvider>
    </ProviderWrapper>
  )
}

Providers.propTypes = {
}

export default inject('providerStore', 'commonStore')(observer(Providers))