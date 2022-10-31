import {Box,useRadio,HStack,useRadioGroup} from "@chakra-ui/react";
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

  console.log('input?', input, 'checkbox?', checkbox);
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'white',
            color: '#657ADC',
            borderColor: '#657ADC',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }


  function Example({inputValue, handleInput}) {
    const options = ['male', 'female']
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: inputValue,

    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group} defaultValue={inputValue} onChange={handleInput}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }







export default Example;
